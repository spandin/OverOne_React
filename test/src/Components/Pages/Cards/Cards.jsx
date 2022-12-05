import './style.scss';

export default function Cards() {
    return (
        <div className="cards">
          <View name='Belarus' capital='Minsk' region='EU' flag='https://flagcdn.com/by.svg' lang='Ru, By' />
          <View name='Russia' capital='Moskow' region='EU' flag='https://flagcdn.com/ru.svg' lang='Ru' />
        </div>
    )
}

const View = ({name, capital, region, flag, lang}) => {
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