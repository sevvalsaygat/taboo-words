function Word({word, forbidden_words, index}) {
  return (
    <div className={`word-card ${colorPicker(index)}`}>
      <h2 className="word-card-header">{word}</h2>
      <div className="word-card-fb">
        {
          forbidden_words.map((fb, index) => {
            return <div
                    className="word-card-fb-element"
                    key={index}>
                      {fb}
                    </div>
          })
        } 
      </div>
    </div>
  )
}

function colorPicker(index) {
  if (index % 9 == 0) {
    return "color-red"
  } else if(index % 3 == 0) {
    return "color-purple"

  } else if(index % 4 == 0) {
    return "color-blue"

  } else if(index % 5 == 0) {
    return "color-pink"

  } else if(index % 6 == 0) {
    return "color-green"

  } else if(index % 7 == 0) {
    return "color-orange"

  } else if(index % 8 == 0) {
    return "color-brown"

  } else if(index % 2 == 0) {
    return "color-yellow"

  } else {
    return "color-bisque"

  }
}

export default Word;
