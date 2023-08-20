import Tag from './Tag';

export default function Card(props) {
    return (
        <>
            <div className="card gap-3 d-flex justify-content-center align-items-center">
                <img className="card__image" src={props.image} />
                <span className="card__name">{props.name}</span>
                <div className="description">{props.description}</div>

                <Tag bg={props.bg} text={props.text} />
            </div>
        </>
        )
}

