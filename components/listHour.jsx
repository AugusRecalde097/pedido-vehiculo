import styles from '@/styles/Home.module.css'

export default function ListItems(horas=[]) {
        console.log(horas)
        // const listItems = horas.map( (horario, index) =>
        // <h2 
        //     id={'hora_'+index}
        //     key={index} 
        //     className={styles.horario}
        //     onClick={(number)=> handleClickHorario(number)} 
        // >
        //     {horario.hora}
        // </h2>
    
        // );
    return (
      <div className={styles.hourContainer}>listItems</div>
    );
  }