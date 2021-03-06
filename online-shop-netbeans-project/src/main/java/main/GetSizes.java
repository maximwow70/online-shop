/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import com.google.gson.Gson;
import com.mycompany.online.shop.netbeans.entity.Item.Color;
import com.mycompany.online.shop.netbeans.entity.Item.Size;
import hibernate.ColorDAO;
import hibernate.HibernateUtil;
import hibernate.SizeDAO;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import presentation.ColorPresentation;
import presentation.SizePresentation;

/**
 *
 * @author admin
 */
@WebServlet(name = "GetSizes", urlPatterns = {"/GetSizes"})
public class GetSizes extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SizeDAO sizeDAO = new SizeDAO(HibernateUtil.getSessionFactory().openSession());
        List<Size> sizes = sizeDAO.getAllSizes();
        List<SizePresentation> list = new ArrayList<>();
        for(Size size : sizes) {
            list.add(new SizePresentation(size));
        }
        //sizeDAO.close();
        Gson gson = new Gson();
        response.getWriter().write(gson.toJson(list));
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SizeDAO sizeDAO = new SizeDAO(HibernateUtil.getSessionFactory().openSession());
        List<Size> sizes = sizeDAO.getAllSizes();
        Set<SizePresentation> sizePresent = new LinkedHashSet<>();
        for(Size size : sizes) {
            sizePresent.add(new SizePresentation(size));
        }
        sizeDAO.close();
        Gson gson = new Gson();
        response.getWriter().write(gson.toJson(sizePresent));
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
