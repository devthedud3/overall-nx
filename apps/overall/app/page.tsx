import { Chip, Header } from './components';

export default function Landing() {
  return (
    <div>
      <div className="wrapper h-screen">
        <Header />
        <Chip name="pending" active status="pending" />
        <Chip name="denied" active status="denied" />
        <Chip name="approved" active status="approved" />
        <Chip
          name="This is an elongated version of the chip"
          active
          status="pending"
        />
      </div>
    </div>
  );
}
