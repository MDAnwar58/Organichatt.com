import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function Title({ subTitle }: { subTitle?: any }) {
  useEffect(() => {
    document.title =
      subTitle === undefined ? "Organichatt." : `${subTitle} - Organichatt.`;
  }, [subTitle]);
}
