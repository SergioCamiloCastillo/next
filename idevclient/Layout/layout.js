import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import { Layout } from "antd";

export default function layout({ children }) {
  const { Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content className="content">{children}</Content>
      <FooterComponent />
    </Layout>
  );
}
