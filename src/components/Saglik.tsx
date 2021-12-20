import axios from "axios";
import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const initialHostsState = () => {
  let temp: {
    [key: string]: string;
  } = {};
  for (let i = 1; i <= 17; i++) {
    temp = {
      ...temp,
      ["https://thegold" + i + ".herokuapp.com/"]: "0",
    };
  }
  return temp;
};

const Row = ({ a, b, c }: { a: string; b: string; c: string }) => {
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
          <Loading isDark={true} width="16" />
        )}
      </td>
    </tr>
  );
};

export default () => {
  const [hosts, setHosts] = useState(initialHostsState());

  const useForceUpdate = () => {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };
  const forceUpdate = useForceUpdate();

  const Get = (url: string, callback: Function) => {
    axios.get(url + "ikd").then((r) => callback(url, r.data.Yarim));
  };

  const SetStatus = () => {
    for (let url in hosts) {
      Get(url, (u: string, d: string) => {
        const tempHosts = Object.assign(hosts, {
          [u]: d,
        });
        setHosts(tempHosts);
        forceUpdate();
      });
    }
  };

  const main = () => {
    setHosts(initialHostsState());
    setTimeout(() => {
      SetStatus();
    }, 1e3);
  };

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
              key={k}
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
};
