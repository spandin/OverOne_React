import './style.css';

const Cards = ({name, capital, region, flag, lang}) => {
    return (
    <div className={name}>
        <img src={flag} alt=""/>
        <h1>{name} ({region})</h1>
        <h2>{capital}</h2>
        <p>
        Languages: {lang}
        </p>
    </div>
    )
}

export default Cards