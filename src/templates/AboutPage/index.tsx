import { Content } from "../../components/Content";
import { TextField } from "../../components/TextField";

export function AboutPage() {
  return (
    <Content classes="mt-10">
      <TextField>
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-4">
          Sobre o Nosso Site
        </h2>
      </TextField>
    </Content>
  );
}
