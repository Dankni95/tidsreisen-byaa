import React from "react";

export function History() {
  const dummyArrayFromDb = [
    {
      title: "dummytitle",
      image: "dummyimg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti distinctio eius fugit, harum id laborum maiores neque, nihil, nulla perspiciatis quae tempore! Cum eos itaque unde veritatis vero voluptatem.",
    },
  ];

  /**en fetch her mot database/usecontext med useloader, error og loading som mapper gjennom historiekapslene**/

  return (
    <>
      <div>
        <img src="" alt="image of white vannsag effect" />
        <h3>Historiekapsel</h3>
        {dummyArrayFromDb.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <img src={item.image} alt="image of vannsag" />
              <p>{item.content}</p>
            </div>
          );
        })}
        <div>
          <button>clickable timeline effect</button>
        </div>
      </div>
    </>
  );
}
