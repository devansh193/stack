import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div className="w-full pb-4">
            <OrganizationProfile
            appearance={{
                elements:{
                    rootBox:{
                        width: "100%",
                        boxShadow: "none",
                    },
                    card:{
                        border: "1px solid #e5e5e5",
                        boxShadow: "none",
                        width: "100%",
                    },
                }
            }}
            />
        </div>
    )
}

export default SettingsPage;