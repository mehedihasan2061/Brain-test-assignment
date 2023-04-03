import React from "react";
import Swal from "sweetalert2";

const Blog = () => {
  const blogquestions = [
    {
      id: 1,
      ques: "Purpose of react router",
      ans: "React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.",
    },
    {
      id: 2,
      ques: "How does context Api Works",
      ans: "The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.",
    },
    {
      id: 3,
      ques: "Describe about useRef",
      ans: "useRef is a hook introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component",
    },
  ];
  const handleQuestion = ({ ques, ans }) => {
    Swal.fire({
      title: `Question:${ques}`,
      text: `Answer: ${ans}`,
    });
  };
  return (
    <div>
      <h2 className="m-8 bg-slate-200 p-4 rounded-xl text-primary font-bold text-4xl font-mono my-4">
        Wellcome to My Blog Page
      </h2>
      <h2 className="font-semibold text-lime-400 text-2xl">Some Common Question</h2>
      <div>
        {blogquestions.map((blogquestion) => (
          <div key={blogquestion.id}>
            <button
              className="text-2xl font-mono font-bold m-4 bg-gray-600 p-6 rounded-xl text-white"
              onClick={() => handleQuestion(blogquestion)}
            >
              {blogquestion.ques}
            </button>
          </div>
        ))}
      </div>

      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-3" className="btn m-4">
        <h2>What does context Works!!1</h2>
      </label>
      <br />
      <label htmlFor="my-modal-3" className="btn m-4">
        <h2>What does context Works!!1</h2>
      </label>
      <br />
      <label htmlFor="my-modal-3" className="btn m-4">
        <h2>What does context Works!!1</h2>
      </label> */}

      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <h3 className="text-lg font-bold">Congratulations</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Blog;
