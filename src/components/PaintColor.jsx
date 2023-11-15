
function PaintColor({color, changeColor}) {
    return (
        <div className='paintColor' style={{backgroundColor: color}} onClick={() => {changeColor(color)}}></div>
    );
};

export default PaintColor

