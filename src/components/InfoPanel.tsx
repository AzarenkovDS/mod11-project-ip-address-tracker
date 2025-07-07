import type { InfoPanelProps } from "../types";

function InfoPanel({ data }: InfoPanelProps) {
  return (
    <section className="info-section">
      <div className="info-container">
        <ul>
          <li>
            <h2>IP Address</h2>
            <p>{data?.ip ?? "N/A"}</p>
          </li>
          <li>
            <h2>Location</h2>
            <p>
              {data
                ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
                : "N/A"}
            </p>
          </li>
          <li>
            <h2>Timezone</h2>
            <p>
              UTC <span>{data?.location.timezone ?? "N/A"}</span>
            </p>
          </li>
          <li>
            <h2>ISP</h2>
            <p>{data?.isp ?? data?.as?.name ?? "Unknown ISP"}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default InfoPanel;
