import React, { useEffect } from "react";
import JoditEditor from "jodit-pro-react";

interface Props {
  config: any;
  textEditorRef: any;
  value: any;
}

export default function TextEditor({ config, textEditorRef, value }: Props) {
  useEffect(() => {
    console.clear();
    // let editor;
    // try {
    //   editor = textEditorRef.current?.editor;
    //   const handleBeforeLoad = () => {
    //     // Custom logic before editor loads, if needed
    //     console.log("Editor is about to load");
    //   };
    //   const handleDestroy = () => {
    //     // Custom cleanup logic before editor is destroyed, if needed
    //     console.log("Editor is being destroyed");
    //   };
    //   if (editor) {
    //     editor.events.on("beforeLoad", handleBeforeLoad);
    //     editor.events.on("destroy", handleDestroy);
    //   }
    // } catch (error) {
    //   console.error("Error initializing JoditEditor:", error);
    // }
    // return () => {
    //   try {
    //     if (editor) {
    //       editor.events.off("beforeLoad", handleBeforeLoad);
    //       editor.events.off("destroy", handleDestroy);
    //     }
    //   } catch (error) {
    //     console.error("Error cleaning up JoditEditor:", error);
    //   }
    // };
  }, []);

  return (
    <JoditEditor
      ref={textEditorRef}
      config={config}
      tabIndex={1} // tabIndex of textarea
      value={value}
    />
  );
}
