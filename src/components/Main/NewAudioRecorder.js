import React from "react";
import styles from "../../recorder.module.css";
import "react-h5-audio-player/lib/styles.css";
import "../../audio-player-customization.css";

const NewAudioRecorder = ({
	recorderState,
	checkMicPermissionBeforeStart,
	stopRecording,
	handleAudioStart,
	handleAudioPause,
}) => {
	const { time, recording, medianotFound, pauseRecord } = recorderState;

	return (
		<>
			{medianotFound ? (
				<p style={{ color: "#fff", marginTop: 30, fontSize: 25 }}>
					Seems the site is Non-SSL
				</p>
			) : (
				<div className={styles.record_section}>
					<div className={styles.duration_section}>
						<div className={styles.duration}>
							<span className={styles.mins}>
								{time.m !== undefined
									? `${time.m <= 9 ? "0" + time.m : time.m}`
									: "00"}
							</span>
							<span className={styles.divider}>:</span>
							<span className={styles.secs}>
								{time.s !== undefined
									? `${time.s <= 9 ? "0" + time.s : time.s}`
									: "00"}
							</span>
						</div>
					</div>
					<div className={styles.record_controller}>
						{!recording ? (
							<button
								onClick={checkMicPermissionBeforeStart}
								className={styles.mic_icon}
							>
								<span className={styles.microphone_icon_sec}>
									<svg
										className={styles.mic_icon_svg}
										version='1.1'
										xmlns='http://www.w3.org/2000/svg'
										x='0px'
										y='0px'
										viewBox='0 0 1000 1000'
										enableBackground='new 0 0 1000 1000'
									>
										<g>
											<path d='M500,683.8c84.6,0,153.1-68.6,153.1-153.1V163.1C653.1,78.6,584.6,10,500,10c-84.6,0-153.1,68.6-153.1,153.1v367.5C346.9,615.2,415.4,683.8,500,683.8z M714.4,438.8v91.9C714.4,649,618.4,745,500,745c-118.4,0-214.4-96-214.4-214.4v-91.9h-61.3v91.9c0,141.9,107.2,258.7,245,273.9v124.2H346.9V990h306.3v-61.3H530.6V804.5c137.8-15.2,245-132.1,245-273.9v-91.9H714.4z' />
										</g>
									</svg>
								</span>
							</button>
						) : (
							<>
								<button
									onClick={stopRecording}
									className={`${styles.icons} ${styles.stop}`}
								>
									<span className={styles.stop_icon}></span>
								</button>
								<button
									onClick={pauseRecord ? handleAudioStart : handleAudioPause}
									className={`${styles.icons} ${styles.pause}`}
								>
									{pauseRecord ? (
										<span className={styles.play_icons}></span>
									) : (
										<span className={styles.pause_icons}></span>
									)}
								</button>
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default NewAudioRecorder;
