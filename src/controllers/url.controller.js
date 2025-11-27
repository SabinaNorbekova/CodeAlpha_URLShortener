import * as urlService from '../services/url.service.js'

export const shorten=async (req,res)=>{
    try{
        const {originalUrl}= req.body

        if(!originalUrl){
            return res.status(400).json({
                error:'Original URL is required'
            })
        }

        const createdUrl=await urlService.createShortUrl(originalUrl)

        const baseUrl=`${req.protocol}://${req.get('host')}`
        res.status(201).json({
            originalUrl:createUrl.originalUrl,
            shortCode:createUrl.shortCode,
            shortUrl:`${baseUrl}/${createUrl.shortCode}`
        })
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Server error'})
    }
}

export const redirectToOriginal=async (req,res)=>{
    try{
        const {code}= req.params

        const urlRecord=await urlService.getUrlByCode(code)

        if(!urlRecord){
            return res.status(404).json({
                error:'URL not found'
            })
        }

        return res.redirect(urlRecord.originalUrl)
    }catch(error){
        console.error(error)
        res.status(500).json({
            error:'Server error'
        })
    }
}