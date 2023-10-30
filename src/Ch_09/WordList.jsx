import React from 'react';
import { useState, useEffect } from 'react';


const wordData = [
  { id: 1, word: 'cursory', meaning: '피상적인, 겉핥기의, 겉핥기식의' },
  { id: 2, word: 'brash', meaning: '속쓰림, 파편, 성급한' },
  { id: 3, word: 'charitable', meaning: '관대한, 자비로운, 자신을 위한' },
  { id: 4, word: 'blatant', meaning: '뻔뻔스러운, 시끄러운' },
  { id: 5, word: 'blast', meaning: '폭발, 발사하다, 공격하다' },
  { id: 6, word: 'avarice', meaning: '탐욕, 강한 욕망' },
  { id: 7, word: 'amuse', meaning: '재미있게 하다' },
  { id: 8, word: 'vanish', meaning: '사라지다, 자취를 감추다' },
  { id: 9, word: 'urbane', meaning: '세련된, 도시풍의, 우아한' },
  { id: 10, word: 'transparent', meaning: '투명한, 솔직한, 속보이는' },
 
];


const styles = {
  wrapper:{
     margin :8 ,
     padding :8 ,
     display :"flex" ,
     flexDirection:"row",
     border:"1px solid grey",
     borderRadius :16 ,
     backgroundColor :"#FAFAD2"
  } ,
  contentContainer:{
    marginLeft :8 ,
    display :"flex" ,
    flexDirection:"column",
    justifyContent:"center"
  } ,
  nameText:{
       color :"black" ,
       fontSize :16,
       fontWeight :"bold"
   } ,
   commentText:{
        color :"black" ,
        fontSize :16
   }
};

const WordList = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < wordData.length) {
        setWords((prevWords) => [...prevWords, wordData[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div>
      {words.map((word) => (
        <div key={word.id} style={styles.wrapper}>
          <div style={styles.contentContainer}>
            <span style={styles.nameText}>{word.word}</span>
            <span style={styles.commentText}>{word.meaning}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordList;