import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
const Assessment = () => {
  const [start, setStart] = useState(false);
  const [back, setBack] = useState(false);
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [checklist, setChecklist] = useState([]);

  const viewRef = useRef();
  useEffect(() => {
    if (checklist && viewRef.current) {
      viewRef.current.scrollIntoView();
    }
  }, [checklist]);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(0);
  };

  const LandingAssessment = ({ ...props }) => {
    return (
      <div className="questionBox">
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <div className="responseButton">
          <h2
            onClick={() => {
              setStart(true);
              setBack(true);
            }}
          >
            Take the Assessment
          </h2>
        </div>
      </div>
    );
  };
  const [count, setCount] = useState(0);

  // Lists
  const List1 = [
    {
      q: "What is the type of your business?",
      button1: "New",
      button2: "Running",
    },
    {
      q: "Do you have a business plan?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Quick Feasibility Check",
    },
    {
      q: "Do you have a brand identity set (name, logo, etc)?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Corporate Identity Setup",
    },
    {
      q: "Do you have a social media presence?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Social Media Setup",
    },
    {
      q: "Do you have a website?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Website Development",
    },
    {
      q: "Do you have an advertisement campaign?",
      button1: "Yes I do",
      button2: "No I do not",
      service: `Beginners advertisement campaign`,
    },
  ];
  const List2 = [
    {
      q: "Are you looking for lead generation and marketing services?",
      button1: "Yes",
      button2: "No",
    },
    {
      q: "Have you conducted your business market analysis?",
      button1: "Yes I have",
      button2: "No I have not",
      service: "Market analysis",
    },
    {
      q: "Do you have social media maintenance support?",
      button1: "Yes I have",
      button2: "No I have not",
      service: "Social media maintenance",
    },
    {
      q: "Do you have advertisements for digital marketing?",
      button1: "Yes I have",
      button2: "No I have not",
      service: "Advertisement",
    },
    {
      q: "Do you have a campaign for your specific product or service?",
      button1: "Yes I have",
      button2: "No I have not",
      service: "Campaign management",
    },
  ];
  const List3 = [
    {
      q: "Are you looking for Website Development or Web App development services?",
      button1: "Yes",
      button2: "No",
    },
    {
      q: "Do you have your website/app requirements documented?",
      button1: "Yes I have",
      button2: "No I have not",
      service: "SRS required",
    },
    {
      q: "Do you have the design of your website/webapp?",
      button1: "Yes I have",
      button2: "No I have not",
      service: "UI/UX design",
    },
    {
      q: "What type of website do you want?",
      button1: "Simple Website",
      button2: "Functional Website",
      service: "Static Website Development",
    },
  ];
  const List4 = [
    {
      q: "Do you want telemarketing services?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Telemarketing",
    },
    {
      q: "Do you want a customer service setup?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Customer Support",
    },
    {
      q: "Do you want your meetings transcribed?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Transcription",
    },
    {
      q: "Do you want your data collected and managed?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Documentation",
    },
    {
      q: "Do you want to outsource your Human Resource operations abroad?",
      button1: "Yes I do",
      button2: "No I do not",
      service: "Human Resource Outsourcing",
    },
  ];

  // Questions
  const QuestionSet1 = () => {
    return (
      <div className="questionBox">
        <h1>{List1[count].q}</h1>
        <div className="responseButton">
          <h2
            onClick={() => {
              if (count === 5) {
                setProgress(progress + 1);
                setCount(0);
                setLevel(1);
              } else {
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {List1[count].button1}
          </h2>
          <h2
            onClick={() => {
              if (List1[count].button2 === "Running") {
                setLevel(1);
                setProgress(progress + 6);
              } else if (count === 5) {
                setProgress(progress + 1);
                setCount(0);
                setChecklist([...checklist, List1[count].service]);
                setLevel(1);
              } else {
                setChecklist([...checklist, List1[count].service]);
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {List1[count].button2}
          </h2>
        </div>
      </div>
    );
  };
  const QuestionSet2 = () => {
    return (
      <div className="questionBox">
        <h1>{List2[count].q}</h1>
        <div className="responseButton">
          <h2
            onClick={() => {
              if (count === 4) {
                setCount(0);
                setLevel(2);
              } else {
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {List2[count].button1}
          </h2>

          <h2
            onClick={() => {
              if (count === 4) {
                setCount(0);
                setChecklist([...checklist, List2[count].service]);
                setLevel(2);
              } else if (List2[count].button2 === "No") {
                setProgress(progress + 4);
                setCount(0);
                setLevel(2);
              } else {
                setChecklist([...checklist, List2[count].service]);
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {List2[count].button2}
          </h2>
        </div>
      </div>
    );
  };
  const QuestionSet3 = () => {
    return (
      <div className="questionBox">
        <h1>{List3[count].q}</h1>
        <div className="responseButton">
          {/* Lead Generation Button */}
          <h2
            onClick={() => {
              if (List3[count].button1 === "Simple Website") {
                setCount(0);
                setChecklist([...checklist, List3[count].button1]);
                setProgress(progress + 1);
                setLevel(3);
              } else {
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {List3[count].button1}
          </h2>

          {/* Web/App Button */}
          <h2
            onClick={() => {
              if (List3[count].button2 === "Functional Website") {
                setProgress(progress + 1);
                setCount(0);
                setChecklist([...checklist, List3[count].button2]);
                setLevel(3);
              } else if (List3[count].button2 === "No") {
                setProgress(progress + 4);
                setCount(0);
                setLevel(3);
              } else {
                setChecklist([...checklist, List3[count].service]);
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {List3[count].button2}
          </h2>
        </div>
      </div>
    );
  };
  const QuestionSet4 = () => {
    return (
      <div className="questionBox">
        <h1>
          {!message ? (
            List4[count].q
          ) : (
            <div className="assessmentComplete">
              <h2>Assessment completed</h2>
              <p>
                Find the services we can provide for your business needs on the
                right.
              </p>
            </div>
          )}
        </h1>
        <div className="responseButton">
          <h2
            onClick={() => {
              if (message === true) {
                routeChange();
              } else if (count === 4) {
                setChecklist([...checklist, List4[count].service]);
                setProgress(progress + 1);
                setMessage(true);
                setBack(false);
              } else {
                setChecklist([...checklist, List4[count].service]);
                setCount(count + 1);
                setProgress(progress + 1);
              }
            }}
          >
            {!message ? List4[count].button1 : "Retake "}
          </h2>
          {!message && (
            <h2
              onClick={() => {
                if (count === 4) {
                  setMessage(true);
                  setBack(false);
                  setProgress(progress + 1);
                } else {
                  setCount(count + 1);
                  setProgress(progress + 1);
                }
              }}
            >
              {!message && List4[count].button2}
            </h2>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="assessmentContainer">
      <div className="assessmentBox">
        <div className="questionContainer">
          <div
            className={back ? "backBtn" : ""}
            onClick={() => {
              if (back) {
                if (level === 0) {
                  if (count === 0) {
                    setProgress(0);
                    setStart(false);
                    setBack(false);
                  } else {
                    setProgress(progress - 1);
                    setCount(count - 1);
                    setChecklist(checklist.slice(0, -1));
                  }
                } else if (level === 1) {
                  if (count === 0) {
                    if (checklist.length > 0) {
                      setProgress(progress - 1);
                      setCount(3);
                      setLevel(0);
                      setChecklist(checklist.slice(0, -1));
                    } else {
                      setProgress(progress - 4);
                      setLevel(0);
                    }
                  } else {
                    setCount(count - 1);
                    setProgress(progress - 1);
                    setChecklist(checklist.slice(0, -1));
                  }
                } else if (level === 2) {
                  if (count === 0) {
                    if (checklist.length > 0) {
                      setCount(4);
                      setLevel(1);
                      setChecklist(checklist.slice(0, -1));
                      setProgress(progress);
                    } else {
                      setLevel(1);
                      setCount(count);
                      setProgress(progress - 4);
                    }
                  } else {
                    setCount(count - 1);
                    setProgress(progress - 1);
                    setChecklist(checklist.slice(0, -1));
                  }
                } else if (level === 3) {
                  if (count === 0) {
                    if (checklist.length > 0) {
                      setLevel(2);
                      setCount(count + 3);
                      setProgress(progress - 1);
                      setChecklist(checklist.slice(0, -1));
                    } else {
                      setCount(count);
                      setLevel(2);
                      setProgress(progress - 4);
                    }
                  } else {
                    setCount(count - 1);
                    setProgress(progress - 1);
                    setChecklist(checklist.slice(0, -1));
                  }
                }
              }
            }}
          >
            <i className="arrow left"></i>
          </div>
          {start ? (
            level === 0 ? (
              <QuestionSet1 />
            ) : level === 1 ? (
              <QuestionSet2 />
            ) : level === 2 ? (
              <QuestionSet3 />
            ) : level === 3 ? (
              <QuestionSet4 />
            ) : (
              setBack(false)
            )
          ) : (
            <LandingAssessment
              title={"Welcome to Tecbix"}
              desc={
                "Take our free assessment to find out what services best suit your business needs."
              }
            />
          )}
          <ProgressBar
            className="progressBar"
            completed={(progress / 19) * 100 - (((progress / 19) * 100) % 1)}
            ariaValuemax={2}
            width={"95%"}
            bgColor="#FF10F0"
            labelColor="#0d0d0d"
            baseBgColor="#1c1c1c"
          />
        </div>
        <div className="needsContainer">
          <div className="needsTitle">
            <h1>Your Business Needs</h1>
          </div>
          <div className="needsList">
            {message && checklist.length === 0 ? (
              <h2 className="noNeeds">
                WOW! Looks like you already got it covered. Want to improve any
                services? Contact Us.
              </h2>
            ) : (
              checklist.map((item, index) => {
                return (
                  <h1 key={index} ref={viewRef}>
                    {item}
                  </h1>
                );
              })
            )}
          </div>
          <div className="needsAction">
            {message ? (
              <div className="emailContainer">
                <p>
                  Send us your email for a <span>free</span> 30 minute
                  consultation on your business needs.
                </p>
                <form>
                  <input type="email" placeholder="mail@example.com" />
                  <input type="submit" placeholder="mail@example.com" />
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
