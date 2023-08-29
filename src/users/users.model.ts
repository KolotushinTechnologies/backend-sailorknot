import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreationAttrs {
    name: string;
    lastname: string;
    surname: string;
    dateBirth: string;
    speciality: string;
    phoneNumber: string;
    city: string;
    balance: string;
    // documentAttachments: string[];
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    // Required fields for model (USER MODEL):
    // Имя - Firstname
    // Фамилия - Lastname
    // Отчество - Surname
    // Дата рождения - DateBirth
    // Должность - Speciality
    // Номер телефона - PhoneNUmber
    // Город присутствия - City
    // Баланс/Депозит - Balance
    // Вложения с документами - DocumentAttachments

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @Column({type: DataType.STRING, allowNull: false})
    lastname: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @ApiProperty({example: '01.01.2000', description: 'Дата рождения'})
    @Column({type: DataType.STRING, allowNull: false})
    dateBirth: string;

    @ApiProperty({example: 'Матрос', description: 'Специальность'})
    @Column({type: DataType.STRING, allowNull: false})
    speciality: string;

    @ApiProperty({example: '+79999999999', description: 'Номер телефона'})
    @Column({type: DataType.STRING, allowNull: false})
    phoneNumber: string;

    @ApiProperty({example: 'Владивосток', description: 'Город присутствия'})
    @Column({type: DataType.STRING, allowNull: false})
    city: string;

    @ApiProperty({example: '100', description: 'Баланс'})
    @Column({type: DataType.STRING, allowNull: false})
    balance: string;

    // TODO: Добавить поля для документов

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
