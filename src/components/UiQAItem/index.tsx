import React from "react";

export interface UiQAItemPropsType {
  id: string;
  question: string;
  answer?: string;
  resources?: {
    id: string;
    url?: string;
    text: string;
  }[];
}

const UiQAItem: React.FC<UiQAItemPropsType> = ({...qaItem}) => {
  const {question, answer = '// TODO', resources} = qaItem;

  if (!question) {
    return null;
  }

  return (
    <>
      <h4>{question}</h4>
      <p>{answer}</p>
      {resources?.length && (
        <ul>
          {resources.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default UiQAItem;
