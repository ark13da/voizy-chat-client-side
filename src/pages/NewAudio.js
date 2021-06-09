import React, {useState} from 'react';

function NewAudio() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("userid", "fEwPXPFf4wGnS7WHg7m7");
    formData.append("password", "abcd");
    formData.append("threadtags", '["test","test from browser"]');
    formData.append("threadTitle", "browser test");

    fetch(
      "https://us-central1-voizy-chat.cloudfunctions.net/voizyChat/addthread",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
//import React, { useState } from "react";
//import { useAuth } from "../contexts/AuthContext";
//import axios from "axios";
//
//import Recorder from "../components/Main/Recorder";
//
//const NewAudio = (props) => {
//	const { currentUser } = useAuth();
//
//	const isComment = props.location.state.status;
//	let threadId;
//	if (isComment) {
//		/** If the new audio is a comment, a threadId is associated to it */
//		threadId = props.location.state.threadId;
//	}
//	const [audioDetails, setAudioDetails] = useState({
//		url: null,
//		blob: null,
//		chunks: null,
//		duration: {
//			h: null,
//			m: null,
//			s: null,
//		},
//	});
//
//	function handleAudioStop(data) {
//		console.log(data);
//		setAudioDetails(data);
//	}
//
//	function handleAudioUpload() {
//
//		// POST endpoint
//		const targetUrl =
//			"https://us-central1-voizy-chat.cloudfunctions.net/voizyChat/addthread";
//
//		const testtUrl = "https://httpbin.org/post";
//
//		// Creation of the FormData object
//		let newAudioData = new FormData();
//
//
//		// Form data formatting and other details to post the form.
//		let audioTitle = document.getElementById("audioTitle").value;
//		let tags = document.getElementById("audioTags").value;
//		let audioTags = tags.split(", ");
//		let userid = currentUser.userId;
//		let password = currentUser.password;
//		let audioFileName =
//			audioTitle.replace(/\s+/g, "-") + "_" + userid + "_" + Date.now();
//
//		// Addition of data to the FormData object
//		newAudioData.append("audioTitle", audioTitle);
//		newAudioData.append("audioTags", JSON.stringify(audioTags));
//		newAudioData.append("userid", userid);
//		newAudioData.append("password", password);
//		newAudioData.append("file", audioDetails.blob, audioFileName + ".ogg");
//
//		// POST REQUEST
//		fetch(targetUrl, {
//			method: "POST",
//			body: newAudioData,
//			
//		})
//			.then((response) => {
//				console.log(response);
//			})
//			.catch((err) => {
//				console.log(err);
//			});
//	}
//
//	function handleReset() {
//		const reset = {
//			url: null,
//			blob: null,
//			chunks: null,
//			duration: {
//				h: null,
//				m: null,
//				s: null,
//			},
//		};
//		setAudioDetails(reset);
//	}
//
//	return (
//		<div>
//			{isComment ? "Comment for thread " + threadId : "New thread"}
//			<Recorder
//				audioDetails={audioDetails}
//				setAudioDetails={setAudioDetails}
//				handleAudioStop={handleAudioStop}
//				handleAudioUpload={handleAudioUpload}
//				handleReset={handleReset}
//			/>
//		</div>
//	);
//};

export default NewAudio;
