import localStyle from "./StatCard.module.css";

export default function StatCard({ stats }) {
  return (
    <div className={localStyle.wrapStat}>
      <img className={localStyle.imgStat} src={stats.src} />
      <div className={localStyle.mainStat}>
        <p className={localStyle.titleStat}>{stats.title}</p>
        <p className={localStyle.amountStat}>
          <b>{stats.totalAmount}</b>
        </p>
        <p className={localStyle.descriptionStat}>{stats.description}</p>
      </div>
    </div>
  );
}
