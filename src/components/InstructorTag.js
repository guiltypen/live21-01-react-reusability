
import React from "react";
import {EmojiSpan,NameSpan,GotogithubSpan,TagWrapperDiv} from "../components/styles.js";
import instructors from "./instructors.js";

const InstructorTag = () => {
const instructorList = instructors.map((instructor)=> (
<div key={instructor.id}><TagWrapperDiv
onClick={() => window.open(instructor.github)}
>
<EmojiSpan>{instructor.emoji}</EmojiSpan>
<NameSpan>{instructor.name}</NameSpan>
<GotogithubSpan>Go to GitHub</GotogithubSpan>
</TagWrapperDiv></div>

));

  return (instructorList);
};

export default InstructorTag;

// <div key={instructor.id}><TagWrapperDiv
// onClick={() => window.open(instructor.github)}
// >
// <EmojiSpan>{instructor.emoji}</EmojiSpan>
// <NameSpan>{instructor.name}</NameSpan>
// <GotogithubSpan>Go to GitHub</GotogithubSpan>
// </TagWrapperDiv></div>