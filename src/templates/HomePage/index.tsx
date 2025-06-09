import { Content } from "../../components/Content";
import { ImageField } from "../../components/ImageField";

export function HomePage() {
  return (
    <>
      <Content>
        <div className="text-center sm:text-left w-full sm:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entenda os Diferentes{" "}
            <span className="text-orange-800">Tipos de Racismo</span>
          </h2>
          <p className="text-base sm:text-2xl">
            Este site tem como objetivo apresentar e explicar as diversas formas
            de racismo presentes na sociedade, ajudando na conscientização e no
            combate a essas práticas.
          </p>
        </div>

        <ImageField src="person_1.png" alt="estudante" />
      </Content>
      <Content bgColor="bg-gray-700">
        <ImageField src="person_1.png" alt="estudante" />
        <div>
          <h1>Hello World!</h1>
        </div>
      </Content>
    </>
  );
}
