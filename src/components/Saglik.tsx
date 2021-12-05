import axios from "axios";
import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const initialHostsState: {
  [key: string]: string;
} = {
  "https://thegold1.herokuapp.com/": "0",
  "https://thegold2.herokuapp.com/": "0",
  "https://thegold3.herokuapp.com/": "0",
  "https://thegold4.herokuapp.com/": "0",
  "https://thegold5.herokuapp.com/": "0",
  "https://thegold6.herokuapp.com/": "0",
  "https://thegold7.herokuapp.com/": "0",
  "https://thegold8.herokuapp.com/": "0",
  "https://thegold9.herokuapp.com/": "0",
  "https://thegold10.herokuapp.com/": "0",
  "https://thegold11.herokuapp.com/": "0",
  "https://thegold12.herokuapp.com/": "0",
  "https://thegold13.herokuapp.com/": "0",
};

function Row({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <tr>
      <td>
        <a target="_blank" href={a + "ikd"}>
          {a.replace("https://", "").replace(".herokuapp.com/", "")}
        </a>
      </td>
      <td className="text-end">
        {c !== "0" ? (
          <span className={"badge bg-" + b}>{c}</span>
        ) : (
          <Loading width="16" />
        )}
      </td>
    </tr>
  );
}

export default function Saglik() {
  const [hosts, setHosts] = useState(initialHostsState);

  const useForceUpdate = () => {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };
  const forceUpdate = useForceUpdate();

  function Get(url: string, callback: Function) {
    axios.get(url + "ikd").then((r) => callback(url, r.data.Yarim));
  }

  function SetStatus() {
    for (let url in hosts) {
      Get(url, (u: string, d: string) => {
        const tempHosts = Object.assign(hosts, {
          [u]: d,
        });
        setHosts(tempHosts);
        forceUpdate();
      });
    }
  }

  function main() {
    setHosts(initialHostsState);
    SetStatus();
  }

  useEffect(() => {
    main();
    // eslint-disable-next-line
  }, []);

  return (
    <Table dark hover responsive style={{ marginBottom: 0 }}>
      <tbody>
        {Object.keys(hosts).map((k: string) => {
          const v: string = hosts[k];
          return (
            <Row
              a={k}
              b={v !== "0" ? "success" : "danger"}
              c={
                v !== "0"
                  ? "Çalışıyor"
                  : // + v.replace(",00", "")
                    "0"
              }
            />
          );
        })}
      </tbody>
    </Table>
  );
}
