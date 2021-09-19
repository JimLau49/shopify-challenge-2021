import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = (loading: boolean) => {
  const color = "#ffffff";
  return (
    <div className="sweet-loading">
      <HashLoader color={color} loading={loading} css={override} size={70} />
    </div>
  );
};
export default LoadingSpinner;
