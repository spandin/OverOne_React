import './style.scss';

export default function ProgLang() {
    const programmingLanguage = ['Python', 'Javascript', 'C#', 'Java', 'Puby']
    return (
        <>
            {programmingLanguage.map((ind, key) => `${key}. ${ind} `)}
        </>
    )
}

