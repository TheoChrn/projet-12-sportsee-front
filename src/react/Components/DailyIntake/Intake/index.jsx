import React from "react";
import { ReactComponent as CaloriesIcone } from "../../../../assets/icone-calorie.svg";
import { ReactComponent as ProteinesIcone } from "../../../../assets/icone-proteines.svg";
import { ReactComponent as GlucidesIcone } from "../../../../assets/icone-glucide.svg";
import { ReactComponent as LipidesIcone } from "../../../../assets/icone-lipides.svg";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const Intake = ({ keyData, size }) => {
  const icons = [
    <CaloriesIcone
      width={`${size}px`}
      height={`${size}px`}
      data={`${keyData.calorieCount}kCal`}
      value="Calories"
      color="Red"
    />,
    <ProteinesIcone
      width={`${size}px`}
      height={`${size}px`}
      data={`${keyData.proteinCount}g`}
      value="Protéines"
      color="Blue"
    />,
    <GlucidesIcone
      width={`${size}px`}
      height={`${size}px`}
      data={`${keyData.carbohydrateCount}g`}
      value="Glucides"
      color="Yellow"
    />,
    <LipidesIcone
      width={`${size}px`}
      height={`${size}px`}
      data={`${keyData.lipidCount}g`}
      value="Lipides"
      color="Pink"
    />,
  ];
  return (
    <div className={styles.container}>
      {icons.map((icone, index) => {
        return (
          <article className={styles.intake} key={index}>
            <div className={styles.intakeIcone}>{icone}</div>
            <div className={styles.intakeInfos}>
              <h2 className={styles.intakeData}>{icone.props.data}</h2>
              <h3 className={styles.intakeValue}>{icone.props.value}</h3>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Intake;

Intake.propTypes = {
  calorieCount: PropTypes.objectOf(PropTypes.number),
  carbohydrateCount: PropTypes.objectOf(PropTypes.number),
  lipidCount: PropTypes.objectOf(PropTypes.number),
  proteinCount: PropTypes.objectOf(PropTypes.number),
  size: PropTypes.number,
};
