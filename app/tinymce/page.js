"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  return (
    <Editor
      apiKey="bgq8hhkrtck32i0xdk24bwchuocqw80wqzyokviqx3yqs4ob"
      init={{
        plugins:
          "ai code preview tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
        toolbar:
          "undo redo | code | preview  | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (request, respondWith) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant"),
          ),
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}
