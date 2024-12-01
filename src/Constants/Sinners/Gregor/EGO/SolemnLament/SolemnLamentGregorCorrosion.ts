import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SolemnLamentGregorCorrosion: Skill = {
    Name: "Solemn Lament",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 32,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the target has less than 0 SP, deal more damage the further their SP value is from 0 (+1% more damage for every missing SP, max 45%)<br>"+
            "Against targets without SP: deal +1% more damage for every 2 [Sinking] on the target (max 45%)<br>"+
            "[On Kill] Heal 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Butterfly] (The Living)<br>"+
            "[On Hit] Inflict 5 [Butterfly] (The Departed)<br>"+
            "[On Hit] Inflict +3 [Sinking] Count<br>"+
            '[On Hit] If the target has 50%- HP, inflict Gloom Damage equal to "All" [Butterfly] values on the target<br>'+
            '- "All" = the sum of both The Living and The Departed on the target', 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/SolemnLament/21207erosionprofile.png"
}