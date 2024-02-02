import React, { useState, useEffect, useRef } from 'react';

export default function PaintBoard ({ children }) {
  const canvasRef = useRef(null);
  const backgroundRef = useRef(null);

  const [ctx, setCtx] = useState(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [lineWidth, setLineWidth] = useState(8);

  const [selectedTool, setSelectedTool] = useState('pencil');
  const [selectedColor, setSelectedColor] = useState('hsl(0, 100%, 80%)');
  const [selectedBackground, setSelectedBackground] = useState('dark')

  const tools = [
    { name: 'pencil', width: 8, emoji: '🖋️' },
    { name: 'brush', width: 20, emoji: '🖌️' },
    { name: 'paint', emoji: '💧' },
    { name: 'eraser', emoji: '🧼' },
  ];

  const colors = [
    { name: 'dark', value: 'var(--dark)', code: 'rgb(19, 20, 27)' },
    { name: 'red', value: 'var(--red)', code: 'hsl(0, 100%, 80%)' },
    { name: 'yellow', value: 'var(--yellow)', code: 'hsl(62, 100%, 80%)' },
    { name: 'green', value: 'var(--green)', code: 'hsl(122, 100%, 80%)' },
    { name: 'blue', value: 'var(--blue)', code: 'hsl(179, 100%, 80%)' },
    { name: 'purple', value: 'var(--purple)', code: 'hsl(238, 100%, 80%)' },
    { name: 'pink', value: 'var(--pink)', code: 'hsl(302, 100%, 80%)' },
  ];

  const resizeCanvas = () => {
    const image = saveCanvasImage();
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  };

  const saveCanvasImage = () => {
    const dataURL = canvasRef.current.toDataURL();
    const imageObj = new Image();
    imageObj.src = dataURL;
    return imageObj;
  };
  useEffect(() => {
    if (isPointerDown) {
      if (selectedTool === 'paint') {
        changeBackground();
      } else if (selectedTool === 'eraser') {
        erase();
        setSelectedBackground(colors.find(el => el.name === 'dark').code)
      } else if (selectedTool === 'pencil' || selectedTool === 'brush') {
        onPointerMove({
          clientX: lastMousePos.x + 1,
          clientY: lastMousePos.y + 1,
        });
      }
    }
    
  }, [isPointerDown]);

  const onPointerDown = (event) => {
    setLastMousePos({
      x: event.clientX,
      y: event.clientY - canvasRef.current.getBoundingClientRect().y ,
    });

    setIsPointerDown(true);
  };

  const onPointerMove = (event) => {  
    if (!isPointerDown || selectedTool === 'paint' || selectedTool === 'eraser') {
      return;
    }

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = selectedColor;
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = 'source-over';

    const mousePos = {
      x: event.clientX,
      y: event.clientY - canvasRef.current.getBoundingClientRect().y 
    }

    ctx.beginPath();
    ctx.moveTo(lastMousePos.x, lastMousePos.y);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.save();

    setLastMousePos({
      x: mousePos.x,
      y: mousePos.y ,
    });
  };


  
  function changeCursor() {
    return `cursor-${selectedTool}`
  }

  const changeTools = (tool) => {
    setSelectedTool(tool)
    setLineWidth(tools.find((el) => el.name === tool).width);

  }
  const changeBackground = () => {
    setSelectedBackground(selectedColor)
  }
  const changeColor = (color) => {
    setSelectedColor(color.code)
  }
  const onPointerUp = () => {
    setIsPointerDown(false);
  };

  const erase = () => {
    ctx.clearRect(0, 0, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="h-full absolute inset-0 z-0" style={{ background: selectedBackground}}>
      {/* palette */}
      <div
        className="bg-white-opacity-3 absolute p-4 rounded w-80 z-20 left-4 top-4"
      >
        <div className='flex justify-between space-x-4'>
          {tools.map((item) => (
              <div
                key={item.name}
                className={`cursor-pointer flex-1 p-2 text-xl rounded-full flex justify-center items-center bg-dark-opacity-9`}
                style={{
                  border: item.name === selectedTool ? '2px solid white' : '2px solid transparent',
                }}
                onClick={() => changeTools(item.name)}
              >
                {item.emoji}
              </div>
          ))}
        </div>
        <div className="mt-3 w-full flex justify-between">
          {colors.map((color) => (
            <div
              key={color.name}
              className="w-8 h-8 rounded-full"
              style={{
                background: color.value,
                outline: color.code === selectedColor ? '2px solid white' : '2px solid transparent',
                outlineOffset: '2px'
              }}
              onClick={() => changeColor(color)}
            ></div>
          ))}
        </div>
      </div>
      {/* canvas */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className={`${changeCursor()} absolute pointer-event-auto inset-0 z-10`}
        width={width}
        height={height}
        onMouseDown={(e) => onPointerDown(e)}
        onMouseMove={(e) => onPointerMove(e)}
        onMouseUp={(e) => onPointerUp(e)}
      ></canvas>
      {children}
    </div>
  );
};

