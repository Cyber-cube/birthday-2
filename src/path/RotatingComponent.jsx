import svg from "../assets/heart.svg"

function RotatingComponent({ degree, updaterFunc }) {
  const width = 15
  return <img src={svg} style={{
    position: "absolute",
    left: `calc(calc(cos(${degree}deg) * 50px) - ${width/2}px)`,
    bottom: `calc(calc(sin(${degree}deg) * 50px) - ${width/2}px)`,
    height: `${width}px`,
    width: `${width}px`,
    borderRadius: "50%",
    zIndex: 999
    // backgroundColor: "black"
  }} onClick={(event) => {
    event.currentTarget.style.display = "none"
    updaterFunc(c => c + 1)
  }}></img>

}

export default RotatingComponent;
