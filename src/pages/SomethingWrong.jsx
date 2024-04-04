import { Main } from "../components";

export function SomethingWrong() {
  return (
    <Main>
      <Main.Error message="Something went wrong" />
    </Main>
  );
}
