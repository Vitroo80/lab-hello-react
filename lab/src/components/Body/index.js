import style from "./style.module.css"

function Block() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Say hello to ReactJS</h1>
        <p className={style.text}>You will learn how to use </p>
        <p className={style.text}>the most popular frotend library,</p>
        <p className={style.text}>and become a super Ninja developer</p>
  
        <p className={style.bottomText}>Awesome!</p>
      </div>
    );
  }
  
  export default Block;