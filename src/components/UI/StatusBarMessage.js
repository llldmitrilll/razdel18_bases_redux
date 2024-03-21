import styles from "./StatusBarMessage.module.css";

const StatusBarMessage = (props) => {
   let statusClasses = '';

   if (props.status === 'error') statusClasses = styles.error;

   if (props.status === 'success') statusClasses = styles.success;
   return (
      <section className={statusClasses}>
         <h2>{props.title}</h2>
         <p>{props.message}</p>
      </section>
   );
};

export default StatusBarMessage;