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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const ThePequodCaptainIshmaelDefense: Skill = {
    Name: "Do Not Fear",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Heal 5 SP for 2 allies adjacent to this unit on the Dashboard (2 times max)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/DoNotFearUT4.png"
}

const ThePequodCaptainIshmaelSkill1: Skill = {
    Name: "To Me!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Apply 2 [Defense Level Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "[On Use] Next turn, the leftmost Skill Slot of 1 other ally with the highest Max HP gains +(Highest Reson.) [Aggro] (Once per turn)<br>"+
            "- At 4+ highest A-Reson., apply 1 [Protection] to the ally next turn when they gain [Aggro] (Once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/ToMe.png"
}

const ThePequodCaptainIshmaelSkill2: Skill = {
    Name: "Pursue Them to the End",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Apply 3 [Offense Level Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "[On Use] Every Reson. of the highest Reson. adds 20% chance that this unit orders the ally on its immediate right (on the Dashboard) to use [Assist Attack] this turn.<br>"+
            "- At 4+ highest A-Reson., apply 2 [Damage Up] to the ally<br>"+
            "- At 4+ Pride A-Reson., apply 2 additional [Pride Power Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/PursueThemToTheEnd.png"
}

const ThePequodCaptainIshmaelSkill3: Skill = {
    Name: "Harpoon of Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal more damage based on the target's missing HP (+0.3% damage per 1% missing HP, max +30%)<br>"+
            "Coin Power +1 for every 5 [Bleed] on target (Max 2)<br>"+
            "[After Attack] If the target is Staggered or defeated, (1+(Highest A-Reson./2)) allies with the least SP heal 10 SP, gain 2 [Poise], and gain +4 [Poise] Count. (4 times max. Max of allies that can be healed: 4)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/HarpoonOfObsession.png"
}

export const ThePequodCaptainIshmael: Identity = {
    Id: 10808,
    Name: "The Pequod Captain",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 68,
    HealthPerLevel: 2.3,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ThePequodCaptainIshmaelSkill1, 
            ThePequodCaptainIshmaelSkill2, 
            ThePequodCaptainIshmaelSkill3, 
            ThePequodCaptainIshmaelDefense],
    Passives: [
        new Passive("Hour of the Hunt",
            PassiveTypeEnum.Combat,
            'If the target is a &ltLake Entity&gt, deal +10% damage'),

        new Passive("Captain of the Pequod",
            PassiveTypeEnum.Combat,
            "- After Attack: if the target is defeated by this unit's attack,<br>"+
            "- Gain 4 [Poise] and +2 [Poise] Count. Then, gain [Overheated Gas Harpoon] next turn.<br>"+
            "- 2 other allies with the least SP heal 7 SP and gain 4 [Poise]<br>"+
            "- If the allies are from The Pequod, heal additional 5 SP. Then, once per turn, apply 1 [Pierce Power Up] next turn.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Captain's Orders",
            PassiveTypeEnum.Support,
            "After Attack: 1 ally with the highest SP gains 2 [Poise] and +2 [Poise] Count when the target is defeated after that unit's attack (2 times per turn)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/ThePequodCaptain/10808gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/ThePequodCaptain/10808gacksunginfo.png"
}