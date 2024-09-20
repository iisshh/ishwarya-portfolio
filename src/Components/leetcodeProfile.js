import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import LoadingSpin from "react-loading-spin";


function LeetCodeProfile() {
  const [leetcodeData, setLeetcodeData] = useState();
  const [isLoading, setLoading] = useState(false);
  const initialObject = { count: 0, total: 0, percentage: 0, beats: 0 };
  const [allSubmissions, setAllSubmissions] = useState(initialObject);
  const [easySubmissions, setEasySubmissions] = useState(initialObject);
  const [mediumSubmissions, setMediumSubmissions] = useState(initialObject);
  const [hardSubmissions, setHardSubmissions] = useState(initialObject);
  const [totalSolved, setTotalSolved] = useState();

  const handleSolvedProblemsMouseEnter = () => {
    setTotalSolved(Math.round(allSubmissions.percentage) + "%");
  };

  const handleSolvedProblemsMouseLeave = () => {
    setTotalSolved(`${allSubmissions.count}`);
  };

  const Example = () => {
    return <ProgressBar completed={60} />;
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const username = "ImC0dish";

      const userData = await fetch(
        `https://leetprofile-server.onrender.com/user/${username}/profile`
      );
      const submitStatsData = await fetch(
        `https://leetprofile-server.onrender.com/user/${username}/submit-stats`
      );
      const problemsSolvedBeatsStatsData = await fetch(
        `https://leetprofile-server.onrender.com/user/${username}/problems-solved-beats-stats`
      );
      const questionsData = await fetch(
        "https://leetprofile-server.onrender.com/questions"
      );

      const profileResponse = await userData.json();
      const submitStatsResponse = await submitStatsData.json();
      const problemsSolvedBeatsStatsResponse =
        await problemsSolvedBeatsStatsData.json();

      const questionsResponse = await questionsData.json();

      const profile = profileResponse.profile;
      const submitStats = submitStatsResponse.submitStats;
      const problemsSolvedBeatsStats =
        problemsSolvedBeatsStatsResponse.problemsSolvedBeatsStats;

      const user = {
        username: username,
        profile: profile,
        submitStats: submitStats,
        problemsSolvedBeatsStats: problemsSolvedBeatsStats,
      };

      const questions = questionsResponse.questions;
      const leetcodeData = {
        user: user,
        questions: questions,
      };
      setLeetcodeData(leetcodeData);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    let difficultyBeatsMap = new Map();
    let totalQuestionsMap = new Map();
    if (leetcodeData) {
      leetcodeData.user.problemsSolvedBeatsStats.forEach((quesionType) => {
        difficultyBeatsMap.set(quesionType.difficulty, quesionType.percentage);
      });
      leetcodeData.questions.forEach((quesionType) => {
        totalQuestionsMap.set(quesionType.difficulty, quesionType.count);
      });
      leetcodeData.user.submitStats.acSubmissionNum.forEach((submission) => {
        const totalQuestions =
          totalQuestionsMap.get(submission.difficulty) ?? 0;
        const percentageSubmissions = (submission.count * 100) / totalQuestions;
        let submissions = {
          count: submission.count,
          total: totalQuestions,
          percentage: percentageSubmissions,
          beats: Math.round(difficultyBeatsMap.get(submission.difficulty) ?? 0),
        };
        switch (submission.difficulty) {
          case "All":
            setAllSubmissions(submissions);
            setTotalSolved(`${submissions.count}`);
            break;
          case "Easy":
            setEasySubmissions(submissions);
            break;
          case "Medium":
            setMediumSubmissions(submissions);
            break;
          case "Hard":
            setHardSubmissions(submissions);
            break;
          default:
            break;
        }
      });
    }
  }, [leetcodeData]);

  if(isLoading){
    return <div>
      <LoadingSpin />
    </div>
  }
  return (
    <div>
      <div className="leetcode-section">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <Link href="https://leetcode.com/IshwaryaHidkimath/" passHref>
              <a target="_blank" rel="noreferrer">
                <img
                  src={leetcodeData?.user.profile.userAvatar ?? "/random"}
                  alt="leetcode-profile-pic"
                  width={200}
                  height={200}
                  style={{ marginTop: "20px", borderRadius: "30px" }}
                ></img>
              </a>
            </Link>
            <div>
              <p className="leetcode-name-style">
                Name: {leetcodeData?.user.profile.realName}
              </p>
              <p className="leetcode-name-style">
                User Name: IshwaryaHidkimath
              </p>
              <p className="leetcode-name-style">
                Leetcode Rank:{" "}
                {leetcodeData?.user.profile.ranking.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 leetcode-solved-style">
            <p
              className="leetcode-name-style"
              style={{ marginTop: "50px", fontSize: "25px" }}
            >
              Problems Solved
            </p>
            {/* <div class="progress yellow" onMouseEnter={handleSolvedProblemsMouseEnter} onMouseLeave={handleSolvedProblemsMouseLeave}>
                   <span class="progress-left">
                                   <span class="progress-bar"></span>
                   </span>
                   <span class="progress-right">
                                   <span class="progress-bar"></span>
                   </span>
                   <div class="progress-value">
                    <span>{totalSolved}</span>
                    <span style={{fontSize:"15px"}}> Solved</span>
                    </div>
                 </div> */}
            <div style={{height:"200px", width:"200px", alignItems:"center"}} onMouseEnter={handleSolvedProblemsMouseEnter} onMouseLeave={handleSolvedProblemsMouseLeave}>
              <CircularProgressbarWithChildren
                value={allSubmissions.percentage ?? 0}
                text={`${totalSolved}`}
                styles={buildStyles({
                  pathColor: "rgb(255 161 22)",
                  textColor: "rgb(255 161 22)",
                })}
                strokeWidth={5}
              >
                <p style={{color:"white", fontSize:"20px", marginTop:"90px"}}>Solved</p>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className="col-md-5 col-lg-5">
            <div className="leetcode-submissions-style">
                <div className="leetcode-submissions-progess-style">
                    <div>Easy</div> 
                    <div>{easySubmissions.count}/{easySubmissions.total}</div>
                    <div>Beats&nbsp;{easySubmissions.beats}%</div>
                </div>
                <ProgressBar completed={(easySubmissions.count/easySubmissions.total*100).toFixed(2)} bgColor="rgb(44,187,93,.9)" width="90%" height="15px" labelAlignment="left"></ProgressBar>
            </div>
            <div className="leetcode-submissions-style">
                <div className="leetcode-submissions-progess-style">
                    <div>Medium</div> 
                    <div>{mediumSubmissions.count}/{mediumSubmissions.total}</div>
                    <div>Beats&nbsp;{mediumSubmissions.beats}%</div>
                </div>
                <ProgressBar completed={(mediumSubmissions.count / mediumSubmissions.total * 100).toFixed(2)} bgColor="rgb(255,192,30,.9)" width="90%" height="15px" labelAlignment="left"></ProgressBar>
            </div>
            <div className="leetcode-submissions-style">
                 <div className="leetcode-submissions-progess-style">
                    <div>Hard</div> 
                    <div>{hardSubmissions.count}/{hardSubmissions.total}</div>
                    <div>Beats&nbsp;{hardSubmissions.beats}%</div>
                </div>
                <ProgressBar completed={(hardSubmissions.count/hardSubmissions.total*100).toFixed(2)} bgColor="rgb(239,71,67,.9)" width="90%" height="15px" labelAlignment="left"></ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeetCodeProfile;
