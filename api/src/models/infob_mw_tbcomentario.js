import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_tbcomentario extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_cometario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_filme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_mw_filmes',
        key: 'id_filme'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_mw_usuario',
        key: 'id_usuario'
      }
    },
    ds_mensagem: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dt_comentario: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_curtidas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_curtidas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_tbcomentario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cometario" },
        ]
      },
      {
        name: "id_filme",
        using: "BTREE",
        fields: [
          { name: "id_filme" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  }
}
