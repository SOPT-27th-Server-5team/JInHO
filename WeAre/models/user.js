module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    //모델의 Attributes (Column)을 정의하는곳
    name: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mbti: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    //모델의 옵션들을 지정하는곳
    freezeTableName: true,
    timestamps: false,
  });
};