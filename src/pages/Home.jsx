import { Button, Table } from "react-bootstrap";
import styles from "./Home.module.css";

import Section from "../components/Section/Section";

const Home = () => {
  const hero =
    `${styles.hero}` +
    " w-100 d-flex flex-column justify-content-center  align-items-center p-1 mb-3 ";
  return (
    <>
      <div className={hero}>
        <Button
          variant="outline-primary"
          size="lg"
          disabled
          style={{
            color: "black",
            textTransform: "capitalize",
            fontSize: "x-large",
            opacity: 1,
          }}
          className="px-2 py-1 mb-3"
        >
          get our latest merch
        </Button>
        <Button
          variant="outline-primary"
          size="lg"
          disabled
          style={{
            color: "black",
            borderRadius: "50%",
            opacity: 1,
          }}
          className=" my-2"
        >
          ►
        </Button>
      </div>
      <Section title="Events ">
        <Table striped>
          {/* <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="border-bottom border-dark">
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className={styles.ticket}>BUY TICKETS</button>
              </td>
            </tr>

            {/* duplicate */}
            <tr className="border-bottom border-dark">
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className={styles.ticket}>BUY TICKETS</button>
              </td>
            </tr>
            <tr className="border-bottom border-dark">
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className={styles.ticket}>BUY TICKETS</button>
              </td>
            </tr>
            <tr className="border-bottom border-dark">
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className={styles.ticket}>BUY TICKETS</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
};
export default Home;
