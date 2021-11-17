const CardImg = ({imgUrl,title}) => {
    return (
        <img
           src={imgUrl}
           alt={title}
           width="200px"
           height="259px"
        />
    )
}

export default CardImg
