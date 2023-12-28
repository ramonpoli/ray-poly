import { FC } from "react";
import DividerStyles from "./Divider.module.scss";

const Divider: FC = () => {
  return <hr className={DividerStyles.Divider} />;
};
export default Divider;
