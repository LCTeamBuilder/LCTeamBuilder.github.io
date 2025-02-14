import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const KurokumoClanCaptainIshmaelDefense: Skill = {
    Name: "Scattering Slash",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain 1 [Protection] (once per turn)<br>"+
            "[Combat Start] On (2 + highest Reson.) allied Kurokumo Clan Identities, including this unit, with the fastest Speed: apply 2 [Defense Power Up] (once per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/KurokumoClanCaptain/ScatteringSlashUT4.png'
}

const KurokumoClanCaptainIshmaelSkill1: Skill = {
    Name: "Clean Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "Deal +10% more damage for every type of negative effect on the target (max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/KurokumoClanCaptain/CleanUp.png'
}

const KurokumoClanCaptainIshmaelSkill2: Skill = {
    Name: "Sharpened Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "Deal +10% more damage for every type of negative effect on the target (max 50%)<br>"+
            "[Combat Start] On 2 other allied Kurokumo Clan Identities with the fastest Speed: apply 2 [Damage Up] (once per turn)<br>"+
            "- If there are 6+ Kurokumo Clan units, including this unit, apply 4 [Damage Up] to 5 allies instead"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[Heads Hit] Inflict 1 [Slash Fragility] (once per turn)<br>"+
            "- If there are 6+ Kurokumo Clan units, including this unit, inflict 2 [Fragile] instead", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Gain 1 S[Slash Power Up] next turn (2 times per turn)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/KurokumoClanCaptain/SharpenedBlade.png'
}

const KurokumoClanCaptainIshmaelSkill3: Skill = {
    Name: "Ink Over",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Kill] Gain 2 S[Slash Power Up] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]", 2),
        new SkillDescriptionPart("Deal +10% more damage for every type of negative effect on the target (max 100%)<br>"+
            "[On Hit] Activate [Bleed] on the target 3 times; then, reduce their [Bleed] Count by 3", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/KurokumoClanCaptain/InkOver.png'
}

export const KurokumoClanCaptainIshmael: Identity = {
    Id: 10811,
    Name: "Kurokumo Clan Captain",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 93,
    HealthPerLevel: 2.28,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +3,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [KurokumoClanCaptainIshmaelSkill1, 
            KurokumoClanCaptainIshmaelSkill2, 
            KurokumoClanCaptainIshmaelSkill3, 
            KurokumoClanCaptainIshmaelDefense],
    Passives: [
        new Passive("Battle Ready",
            PassiveTypeEnum.Combat,
            "When a Kurokumo Clan ally is defeated, gain 1 [Slash Power Up] for this Encounter<br><br>"+

            "When 3+ Kurokumo Clan allies are defeated, gain [Battle Ready] for this Encounter"),
            
        new Passive("Gathering Dark Clouds",
            PassiveTypeEnum.Combat,
            "Combat Start: if there are 2+ allied Kurokumo Clan Identities in this Encounter, including this unit, gain 1 [Dark Cloud Blade]<br><br>"+

            "Combat Start: apply 1 [Dark Cloud] to Kurokumo Clan Identities adjacent to this unit on the Dashboard<br>"+
            "- At 4+ Lust Reson., apply 1 [Dark Cloud] to all other Kurokumo Clan allies",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Cloud Workshop Blade",
            PassiveTypeEnum.Support,
            "1 ally with the fastest Speed inflicts +1 more [Bleed]",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/KurokumoClanCaptain/10811gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/KurokumoClanCaptain/10811gacksunginfo.png'
}