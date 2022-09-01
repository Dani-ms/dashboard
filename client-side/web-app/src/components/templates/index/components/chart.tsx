import { useEffect, useState } from 'react';
import { Col, Container, Row, Tooltip } from 'react-bootstrap';
import {
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Line,
} from 'recharts';
import { TransportedDataGate } from 'src/components/shared/transported-data-gate/transported-data-gate';
import { useMainJSONApi } from 'src/logic/app-internals/apis/main/use-main-json-api';
import {
  TransportedData,
  TransportedDataStatus,
} from 'src/logic/app-internals/transports/transported-data/transported-data-types';

type Props = {
  title: string;
  data: Array<{
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }>;
};

type DataEntry = {
  id: string;
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type DataResponse = Array<DataEntry>;

export function Chart(props: Props) {
  const mainApi = useMainJSONApi();

  const [state, setState] = useState<TransportedData<DataResponse>>({
    status: TransportedDataStatus.NotInitialized,
  });

  useEffect(() => {
    (async () => {
      setState({ status: TransportedDataStatus.Loading });

      const response = await mainApi.get<
        { status: 200; body: DataResponse },
        undefined
      >({
        path: '/data',
        query: undefined,
        acceptableStatusCodes: [200],
      });

      if (response.failure) {
        setState({ status: response.failure });
      } else {
        setState({
          status: TransportedDataStatus.Done,
          data: response.response.body,
        });
      }
    })();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <div className="chart pt-5">
              <h1 className="chartTitle  text-primary">{props.title}</h1>
              <TransportedDataGate dataWrapper={state}>
                {({ data }) => {
                  return (
                    <BarChart
                      className="chat-size"
                      width={500}
                      height={500}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={'name'} />
                      <YAxis />
                      <Tooltip />
                      <Legend
                        width={100}
                        wrapperStyle={{
                          top: 40,
                          right: 20,
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #d5d5d5',
                          borderRadius: 3,
                          lineHeight: '40px',
                        }}
                      />
                      <Bar dataKey={'uv'} fill="#8884d8" />
                      <Bar dataKey={'pv'} fill="#82ca9d" />
                    </BarChart>
                  );
                }}
              </TransportedDataGate>
            </div>
          </Col>

          <Col sm={12} md={6}>
            <div className="chart pt-5">
              <h1 className="chartTitle text-center">{props.title}</h1>
              <TransportedDataGate dataWrapper={state}>
                {({ data }) => {
                  return (
                    <LineChart
                      width={400}
                      height={500}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={'name'} />
                      <YAxis />
                      <Tooltip />
                      <Legend
                        width={100}
                        wrapperStyle={{
                          top: 40,
                          right: 20,
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #d5d5d5',
                          borderRadius: 3,
                          lineHeight: '40px',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey={'uv'}
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey={'pv'} stroke="#82ca9d" />
                    </LineChart>
                  );
                }}
              </TransportedDataGate>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
