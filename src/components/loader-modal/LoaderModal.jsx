import "./LoaderModal.css";
import { Grid } from "react-loader-spinner";

export function LoaderModal({ loadingMessage }) {
  return loadingMessage?.length > 0 ? (
    <div className="loader-modal">
      <div className="loader">
        <Grid
          visible={true}
          height="40"
          width="40"
          color="#2fa3ff"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperClass="grid-wrapper"
        />

        <p className="main-sub__container-para">{loadingMessage}</p>
      </div>
    </div>
  ) : null;
}
