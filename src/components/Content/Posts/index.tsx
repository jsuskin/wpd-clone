import Post from "./Post";
import { localVideoFileNames } from "@/utils/constants";

export default function () {
  return localVideoFileNames.map((filename, idx) => (
    <Post key={idx} {...{ idx, filename }} />
  ));
}
