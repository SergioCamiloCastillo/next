import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import { Layout } from "antd";

const { Header } = Layout;

export default function layout({ children }) {
  const { Content } = Layout;

  return (
    <Layout>
      <Header><HeaderComponent /></Header>
      <Content className="content">{children}</Content>
      <FooterComponent />
    </Layout>
  );
}
