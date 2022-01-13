import styled from 'styled-components'
import Button from 'components/Button'
import Select from 'components/Select'

export const Profile = styled.div`
  padding: 0 30px 20px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 2px;
`

export const ProfileHeader = styled.div`
  padding: 22px 0;
  border-bottom: 1px solod #efefef;
`

export const ProfileHeaderTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  text-transform: capitalize;
`
export const ProfileHeaderSubtitle = styled.div`
  font-size: 1.4rem;
  color: #555;
  margin-top: 3px;
`
export const ProfileInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 30px;
`
export const ProfileLeft = styled.div`
  padding-right: 50px;
  flex-grow: 1;
`
export const ProfileRight = styled.div`
  width: 28rem;
  display: flex;
  justify-content: center;
  border-left: 1px solid #efefef;
`
export const ProfileField = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: 30px;
`
export const ProfileFieldLabel = styled.div`
  width: 20%;
  padding-top: 1rem;
  text-align: right;
  color: rgba(85, 85, 85, 0.8);
  text-transform: capitalize;
  overflow: hidden;
`
export const ProfileFieldContent = styled.div`
  width: 80%;
  padding-left: 2rem;
`
export const ProfileFieldContentText = styled.div`
  font-size: 1.4rem;
  color: #333;
  padding-top: 1rem;
`
export const ProfileFieldLink = styled.div``
export const ProfileFieldInput = styled.div``
export const ProfileSubmit = styled(Button)`
  margin-bottom: 60px;
  height: 40px;
  min-width: 7rem;
`
export const BirthDaySelect = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BirthDaySelectField = styled(Select)`
  width: 32%;
  cursor: pointer;
  user-select: none;
`
export const BirthDaySelectDay = styled(BirthDaySelectField)``
export const BirthDaySelectMonth = styled(BirthDaySelectField)``
export const BirthDaySelectYear = styled(BirthDaySelectField)``
export const AvatarUploader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  margin: 20px 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
export const InputFile = styled.input`
  display: none;
`
export const ButtonUpload = styled(Button)`
  height: 4rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`
export const AvatarUploaderTextContainer = styled.div`
  margin-top: 12px;
  > div {
    color: #999;
  }
`
export const ErrorMessage = styled.div`
  width: 100%;
`
