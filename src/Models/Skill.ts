import { DamageTypeEnum } from "../Enums/DamageTypeEnum";
import { DefenseTypeEnum } from "../Enums/DefenseTypeEnum";
import { SinEnum } from "../Enums/SinEnum";
import { SkillTierEnum } from "../Enums/SkillTierEnum";
import { SkillTypeEnum } from "../Enums/SkillTypeEnum";
import { SkillDescriptionPart } from "./SkillDescriptionPart";

export abstract class Skill{
    abstract readonly Name: string;
    abstract readonly SkillType: SkillTypeEnum;
    abstract readonly SkillTier: SkillTierEnum;
    abstract readonly Affinity: SinEnum;
    abstract readonly BaseValue: number;
    abstract readonly Coins: number;
    abstract readonly CoinValue: number;
    abstract readonly AttackWeight: number;
    abstract readonly SkillLevel: number;
    abstract readonly SkillDescription: Array<SkillDescriptionPart>;
    abstract readonly DamageType?: DamageTypeEnum;
    abstract readonly DefenseType?: DefenseTypeEnum;
    abstract readonly SkillImageDir: string;
}