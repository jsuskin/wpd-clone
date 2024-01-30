import styles from "../../posts.module.css";

export default function ({ type = "Posted", timeAgo = "0m" }) {
  return (
    <div>
      <p>{`${type !== "Posted" ? type + " " : ""}${timeAgo.toString()}`}</p>
    </div>
  );
}
